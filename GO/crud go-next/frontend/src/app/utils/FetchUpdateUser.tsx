export interface User {
    id: number;
    name: string;
  }
  
  export async function FetchUpdateUser(id: number, updatedUserData: Partial<User>) {
   
      const response = await fetch(`http://localhost:8080/updateuser/${id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });
  
      if (!response.ok) {
        throw new Error('An error occurred in the user update process');
      }
  
      console.log('User updated successfully');
      return true;
   
  }
  