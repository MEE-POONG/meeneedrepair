import React from 'react';

const YourComponent: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                Select an option
            </label>
            <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>เช็คอุปกรณ์ คอมพิวเตอร์,โน๊ตบุ๊ค</option>
                <option value="US">ซีพียู</option>
                <option value="CA">เมนบอร์ด</option>
                <option value="FR">ฮาร์ดดิส / ssd</option>
                <option value="DE">แรม</option>
                <option value="DE">อื่นๆ</option>
 
            </select>

             
        </div>
    );
};

export default YourComponent;
