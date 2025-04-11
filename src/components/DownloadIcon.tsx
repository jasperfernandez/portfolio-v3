const DownloadIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-download-icon lucide-download group'
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline
        points='7 10 12 15 17 10'
        className='group-hover:animate-[bounce-down_1s_ease-in-out] group-hover:delay-300'
      />
      <line
        x1='12'
        x2='12'
        y1='15'
        y2='3'
        className='group-hover:animate-[bounce-down_1s_ease-in-out] group-hover:delay-300'
      />
    </svg>
  );
};

export default DownloadIcon;
