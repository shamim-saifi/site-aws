import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLeadTable from "../../components/adminPageComponents/AdminLeadTable";
import { GetAllLeadApi } from "../../redux/actions/leadAction";
import AdminLeadCard from "../../components/adminPageComponents/AdminLeadCard";
import AdminBlogCard from "../../components/adminPageComponents/NewsCard";
import blog1 from '../../assets/about.jpg'
import { useNavigate } from "react-router-dom";
import { GetAllNewsApi } from "../../redux/actions/newsAction";

const blogData = [
    {
        title: 'Getting Started with React',
        description: 'Learn the basics of React and build your first component.',
        url: blog1,
        date: '2023-05-15'
    },
    {
        title: 'CSS Grid Layout Guide',
        description: 'A comprehensive guide to creating modern layouts with CSS Grid.',
        url: blog1,
        date: '2023-06-22'
    },
    {
        title: 'JavaScript ES6 Features',
        description: 'Explore the powerful features introduced in ES6 JavaScript.',
        url: blog1,
        date: '2023-07-10'
    },
    {
        title: 'Building RESTful APIs with Node.js',
        description: 'Step-by-step tutorial for creating REST APIs using Node.js and Express.',
        url: blog1,
        date: '2023-08-05'
    },
    {
        title: 'Introduction to TypeScript',
        description: 'Why TypeScript is gaining popularity and how to start using it.',
        url: blog1,
        date: '2023-09-18'
    },
    {
        title: 'Responsive Design Principles',
        description: 'Key principles for creating websites that work on all devices.',
        url: blog1,
        date: '2023-10-30'
    }
];

const AdminBlog = () => {
    const { leads, pagination, leadLoading, error } = useSelector((state) => state.leadContainer);
    const { news, newsLoading, } = useSelector((state) => state.newsContainer);
    const [inputValue, setInputValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState("");
    const itemsPerPage = 9;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(GetAllNewsApi());
    }, []);



    return (
        <>
            <section className="p-6 sm:p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-3xl font-extrabold text-orange-600 tracking-tight">Blogs</h2>
                    <button
                        onClick={() => navigate('/admin/news/add')}
                        className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition font-medium cursor-pointer"
                    >
                        Add News
                    </button>
                </div>

                <div className="flex flex-wrap gap-4 justify-center">

                    {
                        news.length >= 1 && news?.map((item) => (
                            <AdminBlogCard key={item._id} id={item._id} title={item.title} description={item.description} url={item.banner.url} date={item.createdAt.split('T')[0]} />
                        ))
                    }

                </div>

                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        disabled={currentPage === 1 || leadLoading}
                        onClick={() => setCurrentPage((p) => p - 1)}
                        className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium cursor-pointer"
                    >
                        Previous
                    </button>
                    <span className="text-gray-600 font-medium">
                        Page {pagination?.currentPage || 1} of {pagination?.totalPages || 1}
                    </span>
                    <button
                        disabled={currentPage === pagination?.totalPages || leadLoading}
                        onClick={() => setCurrentPage((p) => p + 1)}
                        className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 font-medium cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    );
};

export default AdminBlog;