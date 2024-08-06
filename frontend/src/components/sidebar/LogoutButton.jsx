import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto flex gap-2 cursor-pointer'  onClick={logout}>
			{!loading ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
			) : (
				<span className='loading loading-spinner'></span>
			)}
			<span className="font-semibold text-white">Logout</span>
		</div>
	);
};
export default LogoutButton;