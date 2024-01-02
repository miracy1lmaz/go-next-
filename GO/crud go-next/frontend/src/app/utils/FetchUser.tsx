import { User } from '@/components/UserList';

async function FetchUser(): Promise<User[]> {
    const response = await fetch('http://localhost:8080/users');
    
    if (!response.ok) {
      throw new Error('An error occurred in the API request.');
    }
    const data = await response.json();    
    console.log(data);
    
    return data;
    
    
}

  
  export default FetchUser;