import useFetch from './useFetch';

const UsersList = () => {
  const {data: users, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;