export interface User {
    id: number;
    name: string;
}


async function CreateNewUser(userData: { name: string }): Promise<User | null> {
    const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error('Error occurred in user creation request');
    }

    //!Empty response check
    
    const text = await response.text();
    return text ? JSON.parse(text) : null;
}

export default CreateNewUser