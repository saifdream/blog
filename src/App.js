import { Provider } from "react-redux";
import Footer from './component/Footer';
import List from './component/blog/List';
import Search from './component/Search';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="#">
                    <img
                        className="h-10"
                        src="./assets/lws.svg"
                        alt="Learn with Sumit"
                    />
                </a>
            </div>
        </nav>

        {/* search div */}
        <Search/>

        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>

                {/* card grid */}
                <List/>
            </div>
        </section>

        {/* footer */}
        <Footer/>
    </Provider>
  );
}

export default App;
