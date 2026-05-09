import { useNavigate } from 'react-router-dom';

export default function HeroShowcase() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6 animate-fade-in">
          Publish • Read • Share
        </span>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6 animate-slide-down">
          The modern way to write blogs
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
          Create beautiful stories, organize articles, and grow your audience with a clean publishing experience.
        </p>

        <button 
          onClick={() => navigate('/add')}
          className="rounded-full px-8 py-3 bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 hover:scale-105 transform transition-all duration-200"
        >
          Start
        </button>

        <div className="mt-16 relative rounded-[36px] bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-100 p-6 md:p-10 min-h-[620px] overflow-hidden">
          

          <div className="max-w-4xl mx-auto rounded-[28px] bg-white shadow-xl overflow-hidden border">
            <div className="h-14 px-6 flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold">
              Featured Story
            </div>

            <div className="grid md:grid-cols-2 gap-8 p-8 items-center">
              <div className="text-left">
                <span className="text-sm font-medium text-blue-600">TRENDING ARTICLE</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  Build stories people actually love to read.
                </h2>
                <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                  Publish insightful blogs with rich formatting, featured images, categories, and engaging content sections.
                </p>
                <button 
                  onClick={() => {
                    const blogSection = document.querySelector('.container');
                    blogSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-6 px-6 py-3 rounded-xl bg-gray-900 text-white hover:bg-black hover:scale-105 transform transition-all duration-200"
                >
                  Explore Blogs
                </button>
              </div>

              <div className="h-[360px] rounded-3xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center text-8xl">
                📝
              </div>
            </div>
          </div>

          {/* <div className="absolute right-6 top-24 hidden lg:block w-72 rounded-3xl bg-white shadow-xl border p-5 text-left">
            <h3 className="font-semibold text-gray-800 mb-4">Latest Posts</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>📌 Mastering React Hooks</div>
              <div>📌 Tailwind CSS for Beginners</div>
              <div>📌 Redux Made Simple</div>
              <div>📌 How to Write Better Content</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
