import React from 'react'
import AgentHeader from './AgentHeader'
import { Navigate, Outlet } from 'react-router-dom'
import AgentAside from './AgentAside'
import { useState, useCallback, useRef, useEffect } from 'react'
import { throttle } from '../../utils/throttle'
import { useSelector } from 'react-redux'

const AgentApp = () => {
    const { agentAuthExp } = useSelector((state) => state.agentContainer);

    const [asideToggle, setAsideToggle] = useState(false);
    const asideRef = useRef(null);


    const openAside = useCallback(() => setAsideToggle(true), []);
    const closeAside = useCallback(() => setAsideToggle(false), []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (asideRef.current && !asideRef.current.contains(event.target)) {
                closeAside();
            }
        }

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setAsideToggle(false); // Reset toggle state for large screens
            }
        };

        const throttledResize = throttle(handleResize, 300);
        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", throttledResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", throttledResize);
        };
    }, [closeAside]);

    useEffect(() => {
        if (asideToggle) document.body.classList.add("overflow-hidden");
        return () => document.body.classList.remove("overflow-hidden");
    }, [asideToggle]);

    return (
        <>
            {
                !!agentAuthExp ? (

                    <Navigate to={'/'} />

                ) : (

                    <div className="min-h-screen flex relative bg-blue-50">
                        {/* aside */}
                        <aside
                            ref={asideRef}
                            className={`fixed top-0 left-0 z-[1000] w-[250px] scrollbarak h-full bg-gray-700 overflow-y-auto scrollbar transition-transform duration-500 ease-linear lg:transform-none lg:translate-x-0 ${asideToggle ? "translate-x-0" : "-translate-x-full"}`}
                        >
                            <AgentAside closeAside={closeAside} />
                        </aside>

                        <main className="ml-0 lg:ml-[250px] flex-1">
                            <AgentHeader openAside={openAside} />
                            <Outlet />
                        </main>
                    </div>
                )
            }
        </>
    )
}

export default AgentApp