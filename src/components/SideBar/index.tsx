const introTextClass =
  "font-[Suit] font-[800] text-[16px] leading-[20px] tracking-[-1%] text-[#75DE73]";

export const SideBar = () => {
  return (
    <div className="w-[255px] bg-[#dd417d]">
      <div className="p-[35px]">
        <div className="flex flex-col gap-[10px] ">
          <p className={introTextClass}>
            안녕하세요.
            <br />
            서울에서 활동중인
            <br />
            디자이너 조혜리입니다.
          </p>
          <p className={introTextClass}>
            시각디자인 전공으로,
            <br />
            2D&3D를 활용하여
            <br />
            다양한 브랜딩을
            <br />
            전개하고 있습니다.
          </p>
          <p className={introTextClass}>
            Adobe site를 기반으로
            <br />
            생성형 AI와 함께
            <br />
            즐겁게 일하고 있습니다.
          </p>
        </div>
      </div>
      <ul>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer"></a>
        </li>
        <li>
          <a href="/" target="_blank" rel="noopener noreferrer"></a>
        </li>
      </ul>
    </div>
  );
};
