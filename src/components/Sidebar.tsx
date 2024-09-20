const Sidebar = () => {
  return (
    <>
      <div className='h-full flex-1 flex overflow-hidden'>
        <nav className='narrow-sidebar hidden md:block lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto'>
          <div className='relative w-56 flex flex-col bg-base-200 min-h-full'>
            <img
              className='md:width={100} height={100} self-center'
              // src={Logo}
              alt='Logo'
              width={125}
              height={125}
            />
            <ul className='menu menu-lg bg-base-200 w-56'>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
              <li>Option 5</li>
              <li>Option 6</li>
              <li>Option 7</li>
            </ul>
            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700'></hr>
            <div className='dropdown dropdown-top self-center'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              ></div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
