import FollowCard from "./FollowCard";

function App() {
	const data = [
		{
			username: "ninadobrev",
			name: "Nina Dobrev",
			isFollowing: true,
		},
		{
			username: "paulwesley",
			name: "Paul Wesley",
			isFollowing: true,
		},
		{
			username: "iansomerhalder",
			name: "Ian Somerhalder",
			isFollowing: true,
		},
		{
			username: "candiceking",
			name: "Candice King",
			isFollowing: false,
		},
	];
	return (
		<section className="tw-follow-card-container">
			{data.map(({ username, name, isFollowing }) => (
				<FollowCard
					key={username}
					username={username}
					initialIsFollowing={isFollowing}
				>
					{name}
				</FollowCard>
			))}
		</section>
	);
}

export default App;
