export default function TopNavigationBar() {
    return (
        <section className="flex w-full justify-between items-center bg-[#fafafa] px-8 py-4  ">
            <div className="flex gap-2 items-center">
                <button
                    type="button"
                    id="openNavBar"
                    className="space-y-1 md:hidden right-5 p-3 hover:cursor-pointer">
                    <div className=" bg-white rounded-sm w-5 h-[2px]"></div>
                    <div className="bg-white rounded-sm w-5 h-[2px]"></div>
                    <div className="bg-white rounded-sm w-5 h-[2px]"></div>
                </button>
                <form action="">
                    <div className="flex items-center gap-1 rounded-md outline md:py-2 md:px-4 outline-[var(--dashboard-light-color)]  focus-within:outline-2 focus-within:outline-blue-300 transition-colors duration-100 ease-in-out">
                        <span className="p-2 cursor-pointer">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.62451 15.751C12.5595 15.751 15.7495 12.561 15.7495 8.62598C15.7495 4.69095 12.5595 1.50098 8.62451 1.50098C4.68948 1.50098 1.49951 4.69095 1.49951 8.62598C1.49951 12.561 4.68948 15.751 8.62451 15.751Z"
                                    stroke="#000"
                                    strokeWidth="1.125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M16.4995 16.501L14.9995 15.001"
                                    stroke="#000"
                                    strokeWidth="1.125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <input
                            className="w-full md:w-80 p-1 text-sm focus-within:outline-none"
                            type="search"
                            placeholder="Type to Search"
                        />
                    </div>
                </form>
            </div>

            <a className="inline-block p-2" href="">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.19 14.0598L19.06 12.1798C18.81 11.7698 18.59 10.9798 18.59 10.4998V8.6298C18.59 4.9998 15.64 2.0498 12.02 2.0498C8.38996 2.0598 5.43996 4.9998 5.43996 8.6298V10.4898C5.43996 10.9698 5.21996 11.7598 4.97996 12.1698L3.84996 14.0498C3.41996 14.7798 3.31996 15.6098 3.58996 16.3298C3.85996 17.0598 4.46996 17.6398 5.26996 17.8998C6.34996 18.2598 7.43996 18.5198 8.54996 18.7098C8.65996 18.7298 8.76996 18.7398 8.87996 18.7598C9.01996 18.7798 9.16996 18.7998 9.31996 18.8198C9.57996 18.8598 9.83996 18.8898 10.11 18.9098C10.74 18.9698 11.38 18.9998 12.02 18.9998C12.65 18.9998 13.28 18.9698 13.9 18.9098C14.13 18.8898 14.36 18.8698 14.58 18.8398C14.76 18.8198 14.94 18.7998 15.12 18.7698C15.23 18.7598 15.34 18.7398 15.45 18.7198C16.57 18.5398 17.68 18.2598 18.76 17.8998C19.53 17.6398 20.12 17.0598 20.4 16.3198C20.68 15.5698 20.6 14.7498 20.19 14.0598ZM12.75 9.9998C12.75 10.4198 12.41 10.7598 11.99 10.7598C11.57 10.7598 11.23 10.4198 11.23 9.9998V6.89981C11.23 6.4798 11.57 6.1398 11.99 6.1398C12.41 6.1398 12.75 6.4798 12.75 6.89981V9.9998Z"
                        fill="#000"
                    />
                    <path
                        d="M14.8301 20.01C14.4101 21.17 13.3001 22 12.0001 22C11.2101 22 10.4301 21.68 9.88005 21.11C9.56005 20.81 9.32005 20.41 9.18005 20C9.31005 20.02 9.44005 20.03 9.58005 20.05C9.81005 20.08 10.0501 20.11 10.2901 20.13C10.8601 20.18 11.4401 20.21 12.0201 20.21C12.5901 20.21 13.1601 20.18 13.7201 20.13C13.9301 20.11 14.1401 20.1 14.3401 20.07C14.5001 20.05 14.6601 20.03 14.8301 20.01Z"
                        fill="#000"
                    />
                </svg>
            </a>
        </section>
    )
}
