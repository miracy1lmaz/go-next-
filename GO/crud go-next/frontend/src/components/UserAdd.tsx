"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import CreateNewUser, { User } from '@/app/utils/CreateNewUser';
const UserAdd = () => {

    //!useState hook to manage 'name' state. Initially, it's an empty string.

    const [name, setName] = useState('');

    //!useState hook to manage the success message. Initially, it's an empty string.

    const [successMessage, setSuccessMessage] = useState('');

    //!handleSubmit is an function to handle form submission.

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            //!Calling CreateNewUser function to add the new user to the database.

            const newUser = { name };
            await CreateNewUser(newUser);
            setSuccessMessage('User added successfully!');
        } catch (error) {
            console.error('An error occurred while creating the user:', error);
            setSuccessMessage('User could not be created..');
        }
    };

    return (

        <div className="container mx-auto px-4">
            <h1 className="text-xl font-bold my-4">Create New User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        User
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create
                    </button>
                    <Link href="/user">

                        Back

                    </Link>
                </div>
                {successMessage && <p className="mt-3">{successMessage}</p>}
            </form>
        </div>

    );

};

export default UserAdd;
