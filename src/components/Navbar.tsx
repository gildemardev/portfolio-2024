import { FC } from "react";

const Navbar: FC = () => {
	return (
		<header className='w-full border-b flex justify-center items-center fixed py-2'>
			<h3 className='scroll-m-20 text-xl font-semibold tracking-tight font-cascadia-italic'>
				GildemarDev
			</h3>
		</header>
	);
};

export default Navbar;
