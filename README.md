# WorkHub Backend

A backend service that provides user data in JSON format. Accessing the route `https://workerhubbackend.onrender.com/api/users` returns a list of users. Additionally, sending an ID as a route parameter to the route `https://workerhubbackend.onrender.com/api/user/:id` returns a response containing detailed information about the corresponding user, including their name, email, and role. The response also includes metadata about the total number of users, the count of users after applying any filter (in this case, none), and a list of filtered user IDs.
