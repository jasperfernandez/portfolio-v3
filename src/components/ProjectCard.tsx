const ProjectCard = () => {
  return (
    <div className='border border-border rounded-md p-4'>
      <h1 className='font-medium'>E-VotePro</h1>

      <p className='text-sm text-muted-foreground'>A voting system.</p>

      {/* 
          <div>
            <IconLink
              href=''
              icon={<SquareArrowOutUpRight size={16} strokeWidth={1.5} />}
            />
          </div>

          <div className='flex gap-2 items-center'>
            <SkillBox
              title={skills.javascript.title}
              logo={
                <img
                  src={`/logos/${skills.javascript.key}.svg`}
                  className='size-4'
                />
              }
              className='w-fit'
            />

            <SkillBox
              title={skills.laravel.title}
              logo={
                <img
                  src={`/logos/${skills.laravel.key}.svg`}
                  className='size-4'
                />
              }
              className='w-fit'
            />

            <SkillBox
              title={skills.bootstrap.title}
              logo={
                <img
                  src={`/logos/${skills.bootstrap.key}.svg`}
                  className='size-4'
                />
              }
              className='w-fit'
            />

            <SkillBox
              title={skills.mysql.title}
              logo={
                <img
                  src={`/logos/${skills.mysql.key}.svg`}
                  className='size-4'
                />
              }
              className='w-fit'
            />
          </div> */}
    </div>
  );
};

export default ProjectCard;
