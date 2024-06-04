import React, { useState } from 'react';

const TShirtDesigner = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">T-Shirt Designer</h1>
            <div className="bg-white p-4 rounded shadow-md w-full h-[20rem] max-w-lg">
                <div className="flex justify-center mb-4">
                    <div className="relative">
                        <img src="/path/to/red-tshirt.jpg" alt="T-Shirt" className="w-full h-auto" />
                        <div className="absolute inset-0 flex justify-center items-center flex-col h-40">
                            {image && <img src={image} alt="Design" className="w-24 h-24 object-contain" />}
                            {text && <p className="text-black text-xl">{text}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 mb-4 ">
                    <input
                        type="text"
                        placeholder="Add Text"
                        value={text}
                        onChange={handleTextChange}
                        className="border p-2 rounded"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="border p-2 rounded"
                    />
                </div>
                <button className="bg-teal-500 text-white py-2 px-4 rounded w-full">Next</button>
            </div>
        </div>
    );
};

export default TShirtDesigner;
