export async function fetchDeleteUser(id: number) {

    const response = await fetch(`http://localhost:8080/deleteuser/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('An error occurred in the user deletion process');
    }

    console.log('User deleted successfully');
    return true;
}
