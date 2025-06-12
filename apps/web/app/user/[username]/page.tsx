import Profile from "./profile";

const ProfilePage = async (params: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params.params;
  return <Profile username={username} />;
};

export default ProfilePage;
