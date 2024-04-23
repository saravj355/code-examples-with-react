type Card = {
	username: string;
	children: string;
	initialIsFollowing?: boolean;
};

import { useState } from "react";
import "./FollowCard.css";
export default function FollowCard({
	children,
	username,
	initialIsFollowing,
}: Card) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

	function handleFollow() {
		setIsFollowing((wasFollowing) => !wasFollowing);
	}

	const imageUrl = `https://unavatar.io/twitter/${username}`;
	return (
		<article className="tw-follow-card">
			<header className="tw-follow-card-header">
				<img
					className="tw-follow-card-avatar"
					src={imageUrl}
					alt={`${username}'s avatar`}
				/>
				<div className="tw-follow-card-info">
					<strong>{children}</strong>
					<span className="tw-follow-card-username">@{username}</span>
				</div>
			</header>
			<aside>
				<button
					className={`tw-follow-card-button ${
						isFollowing ? "is-following" : ""
					}`}
					onClick={handleFollow}
				>
					<span className="tw-follow-card-text">
						{isFollowing ? "Following" : "Follow"}
					</span>
					<span className="tw-follow-card-unfollow">Stop following</span>
				</button>
			</aside>
		</article>
	);
}
