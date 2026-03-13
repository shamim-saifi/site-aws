import { useEffect, useMemo, useState } from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { GetAllToLeadApi } from "../../redux/actions/leadAction";
import { AgentBuyLeadApi } from "../../redux/actions/paymentAction"; // Ensure this is correctly imported
import { useDebounce } from "../../hook/useDebounce";
import axios from "axios";
import { server } from "../../redux/store";

const BuyLeads = () => {
  const dispatch = useDispatch();
  const { newLeads = [], leadLoading, publicPagination, error } = useSelector((state) => state.leadContainer);
  const { agentProfile, agentLoading } = useSelector((state) => state.agentContainer);

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [destination, setDestination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isBuying, setIsBuying] = useState(false); // Track buy action loading

  const [dbCountry, setDbCountry] = useState([])
  const [dbDestination, setDbDestination] = useState([])

  const itemsPerPage = 9;



  const debouncedSearch = useDebounce(search, 500);
  const debouncedCountry = useDebounce(country, 500);
  const debouncedDestination = useDebounce(destination, 500);



  // console.log("country", country)
  useEffect(() => {
    dispatch(
      GetAllToLeadApi(
        currentPage,
        itemsPerPage,
        debouncedSearch,
        debouncedCountry,
        debouncedDestination
      )
    );
  }, [dispatch, currentPage, debouncedSearch, debouncedCountry, debouncedDestination]);


  // Reset currentPage when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, country, destination]);

  // Use backend-filtered leads directly (no client-side filtering)
  const paginatedLeads = newLeads;

  const buyLeadHandler = async (id) => {
    if (!agentProfile?.wallet) {
      alert("Wallet information unavailable");
      return;
    }
    if (selectedLead.price <= agentProfile.wallet) {
      setIsBuying(true);
      try {
        await dispatch(AgentBuyLeadApi(id))
        // await dispatch(AgentBuyLeadApi(id)).unwrap();
        setSelectedLead(null);
      } catch (error) {
        alert(error?.message || "Failed to purchase lead");
      } finally {
        setIsBuying(false);
      }
    } else {
      alert("Insufficient wallet balance to buy this lead");
    }
  };

  const opneLead = (lead) => {
    if (!localStorage.getItem('agentToken')) {
      return alert("Login First")
    }
    setSelectedLead(lead)
  }

  const apiGetCountry = async () => {
    try {
      const { data } = await axios.get(`${server}/lead/countrys`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setDbCountry(data?.countries ? data?.countries : [])
      setDbDestination(data?.destinations ? data?.destinations : [])


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apiGetCountry()
  }, [])

  return (
    <section className="m-2.5 sm:m-5 space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">Buy Leads</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-full focus:outline-blue-500"
        />
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-full focus:outline-blue-500"
        >
          <option value="">Filter by country</option>
          {
            dbCountry?.map((item) => (
              <option value={item}>{item}</option>
            ))
          }
        </select>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border rounded px-3 py-2 text-sm w-full focus:outline-blue-500"
        >
          <option value="">Filter by destination</option>
          {
            dbDestination?.map((item) => (
              <option value={item}>{item}</option>
            ))
          }
        </select>
      </div>

      {/* Error State */}
      {/* {error && (
        <div className="text-center text-red-500 font-medium py-4">{error}</div>
      )} */}

      {/* Loading State */}
      {leadLoading ? (
        <div className="text-center text-blue-500 font-medium py-10">Loading leads...</div>
      ) : (
        <>
          {/* Lead Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedLeads.length > 0 ? (
              paginatedLeads.map((lead) => (
                <div
                  key={lead._id}
                  className="bg-white p-5 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all space-y-3 relative"
                >
                  <div className="text-lg font-semibold text-gray-800">{lead.firstName}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaGlobeAsia className="text-blue-500" />
                    <span>
                      {lead.country} → {lead.destination}
                    </span>
                  </div>
                  <div className="text-xs text-blue-600 italic bg-blue-50 border border-blue-200 px-2 py-1 rounded">
                    Contact info will be visible after purchase
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-blue-600 font-medium text-sm">₹{lead.price}</span>
                    <button
                      onClick={() => opneLead(lead)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded cursor-pointer"
                      disabled={isBuying}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 pt-10">No leads match your filters.</p>
            )}
          </div>

        </>
      )}














      {/* Pagination */}
      {publicPagination?.totalPages > 1 && (
        <div className="flex justify-center gap-4 pt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1 || leadLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-gray-700 font-medium">
            Page {publicPagination.currentPage} of {publicPagination.totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, publicPagination.totalPages))}
            disabled={currentPage === publicPagination.totalPages || leadLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md relative space-y-4 border border-blue-200">
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-lg cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold text-blue-600">Lead Contact Details</h3>
            <div className="text-gray-700 space-y-1 text-sm">
              <p>
                <strong>Country:</strong> {selectedLead.country}
              </p>
              <p>
                <strong>Destination:</strong> {selectedLead.destination}
              </p>
              <p>
                <strong>Price:</strong> ₹{selectedLead.price}
              </p>
            </div>
            <div className="pt-2 border-t border-blue-100">
              <p className="text-sm text-gray-600">
                <strong>Your Wallet Balance:</strong>{" "}
                <span className="text-blue-600">₹{agentProfile?.wallet ?? "N/A"}</span>
              </p>
              <button
                onClick={() => buyLeadHandler(selectedLead._id)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm p-2 mt-2 rounded cursor-pointer"
                disabled={isBuying}
              >
                {isBuying ? "Purchasing..." : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default BuyLeads;