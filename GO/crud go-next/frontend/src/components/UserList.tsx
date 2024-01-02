
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import FetchCreateUser from '@/app/utils/FetchUser';
import { fetchDeleteUser } from '@/app/utils/fetchDeleteUser';
import { FetchUpdateUser } from '@/app/utils/FetchUpdateUser';


//!define a type 

export type User = {
  id: number;
  name: string;
};

const UserList = () => {

  //! State to manage user data for page display and sorting.

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    //! Fetch and display all user data on the page.

    const fetchUsers = async () => {
      try {

        const fetchedUsers = await FetchCreateUser();
        console.log(fetchedUsers);

        //! Fetch user data from the server
        //! Update the state with fetched user data

        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error loading users:', error);
      }
    };
    // view 
    fetchUsers();
  }, []);






  //! EDIT SCREEN

  const [editingUser, setEditingUser] = useState<User | null>(null);

  //!Function to initiate the edit mode for the selected user.

  const startEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleEditSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (editingUser) {

      //!Update the user using FetchUpdateUser utils.

      const isSuccess = await FetchUpdateUser(editingUser.id, editingUser);

      //! If the update is successful, update the state with the edited user.

      if (isSuccess) {
        setUsers(users.map(user => user.id === editingUser.id ? editingUser : user));
        setEditingUser(null); // Düzenleme modunu kapat
      }
    }
  };











  //! After the DELETE operation, update the state immediately. Utilize fetchDeleteUser for the deletion.


  //!Function to handle user deletion.

  const handleDeleteUser = async (id: number) => {
    const isSuccess = await fetchDeleteUser(id);

    //!If deletion is successful, update the state by removing the deleted user.

    if (isSuccess) {
      setUsers(users.filter(user => user.id !== id));
    }
  };






  return (
    <div className="container mx-auto px-4">

      {/* Header */}

      <h1 className="text-xl font-bold my-4">USERS</h1>

      {/* User Table */}

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b">
                {/* User Details */}

                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">


                  {/* Edit and Delete Buttons */}


                  <button onClick={() => startEdit(user)} className="text-blue-500 hover:text-blue-700">
                    Edit
                  </button>



                  <button onClick={() => handleDeleteUser(user.id)} className="ml-4 text-red-500 hover:text-red-700">

                    Delete

                  </button>



                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit User Modal */}


      {editingUser && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6">
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                value={editingUser.name}
                onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                required
                className="p-2 border border-gray-300 rounded w-full"
              />

              {/* Save and Back Buttons */}


              <div className="flex justify-end space-x-2">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
                <button onClick={() => setEditingUser(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

       {/* New User  */}


      <Link href="/user/useradd" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">

        New

      </Link>
    </div>
  );
};

export default UserList;
