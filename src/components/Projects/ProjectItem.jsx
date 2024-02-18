const ProjectItem = ({ title, description, projectImg, githubUrl }) => {
    return (
        <div className="p-1 hover:animate-border hover:bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] rounded-lg ">
            <div className="flex max-md:grid *:grid-cols-1  bg-gray-100 w-full gap-2 items-center justify-center rounded-lg border p-4">
                <img
                    className="h-40 object-contain rounded-md bg-primaryColor justify-self-center"
                    src={projectImg}
                    alt=""
                />
                <div className="px-4 max-md:text-center">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className=" text-xl max-md: font-semibold cursor-pointer"
                    >
                        {title} <i className="fa-solid fa-link fa-xs"></i>{' '}
                    </a>
                    <p className="text-left">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
