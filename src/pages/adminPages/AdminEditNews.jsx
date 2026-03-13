import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewsApi, GetAllNewsApi, SingleNewsApi, UpdateNewsApi } from '../../redux/actions/newsAction';
import { FaArrowLeft } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const AdminEditNews = () => {
    const { newsLoading, singleNews } = useSelector((state) => state.newsContainer); // Updated to blogContainer
    const [title, setTitle] = useState(singleNews.title);
    const [description, setDescription] = useState(singleNews.description);
    const [content, setContent] = useState();
    const [banner, setBanner] = useState(null);
    const [preBanner, setPreBanner] = useState(singleNews.banner.url);

    const { newsId } = useParams()

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBanner(file);
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setPreBanner(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!title || !description || !content || !banner) {
        //     toast.error('Please fill all required fields and select a banner image.');
        //     return;
        // }

        try {
            await dispatch(UpdateNewsApi(title, description, content, banner,singleNews._id));
            await dispatch(GetAllNewsApi()); // Fetch updated blog list
            setTitle('');
            setDescription('');
            setContent('');
            setBanner(null);
            setPreBanner('');
            navigate('/admin/news');
        } catch (err) {
            console.error('Submission error:', err);
        }
    };

    useEffect(() => {
        dispatch(SingleNewsApi(newsId))
    }, [])

    return (
        <div className="w-[100%] mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
            <button
                onClick={() => navigate("/admin/news")}
                className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-sm mb-6 transition cursor-pointer"
            >
                <FaArrowLeft /> Back to News
            </button>
            <h2 className="text-2xl font-bold text-gray-800">Edit News here</h2>



            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Image Upload */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Blog Banner</label>
                    <input
                        type="file"
                        accept="image/jpeg,image/png,image/jpg"
                        onChange={handleBannerChange}
                        className="block w-full border border-gray-300 rounded-md p-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                    />
                    {preBanner && (
                        <img
                            src={preBanner}
                            alt="Banner Preview"
                            className="mt-2 h-40 w-auto rounded-md object-cover"
                        />
                    )}
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter blog title"
                        required
                    />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Short Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter short description"
                        rows="4"
                        required
                    />
                </div>

                {/* Editor */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Blog Content</label>
                    <Editor
                        apiKey="w7knhyk8kk8k5bhy975g238ij4e4ifkg8xu27f0zw6r1fyk2"
                        init={{
                            plugins: [
                                'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                            ],
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                            menubar: false,
                            height: 400,
                            content_style: 'body { font-family: Arial, sans-serif; font-size: 14px }',
                        }}
                        initialValue={singleNews.content}
                        onEditorChange={(newContent) => setContent(newContent)}
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => navigate('/admin/blog')}
                        className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={`px-4 py-2 text-sm rounded text-white transition-colors cursor-pointer ${newsLoading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'
                            }`}
                        disabled={newsLoading}
                    >
                        {newsLoading ? 'Submitting...' : 'Submit News'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminEditNews;