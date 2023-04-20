import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-4 w-full text-center text-tertiary flex flex-col items-center justify-center'>
      <div className='image'>
        <svg
          width='160'
          height='50'
          viewBox='0 0 199 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M41.7788 0.460025H11.9919C11.0589 0.460335 10.1511 0.763462 9.40513 1.32385C8.65913 1.88423 8.11516 2.6716 7.85498 3.56762L0.170938 30.029C-0.0154321 30.6708 -0.0499614 31.3472 0.0700792 32.0047C0.19012 32.6621 0.46144 33.2827 0.862594 33.8172C1.26375 34.3518 1.78374 34.7857 2.38147 35.0847C2.97919 35.3837 3.63827 35.5395 4.30661 35.5399H34.1021C35.0354 35.5399 35.9434 35.2369 36.6896 34.6765C37.4359 34.1161 37.98 33.3286 38.2403 32.4323L45.9218 5.97097C46.1084 5.32854 46.1428 4.65151 46.0224 3.99348C45.9019 3.33545 45.63 2.7145 45.228 2.17979C44.826 1.64508 44.305 1.21131 43.7064 0.912809C43.1077 0.614311 42.4477 0.459291 41.7788 0.460025ZM34.7313 22.5715C34.543 23.136 34.1906 23.6316 33.7192 23.9948C33.2801 24.3389 32.7381 24.5253 32.1802 24.5242H21.6668C22.4211 22.4262 23.0922 20.5572 23.6799 18.9172C23.9343 18.2122 24.1805 17.521 24.4186 16.8439C24.6304 16.248 24.8237 15.7124 24.9985 15.2322H14.2241L13.787 16.456H22.6272L21.0869 20.7653L20.4356 22.5715C20.2401 23.134 19.8866 23.6281 19.4174 23.9948C18.9808 24.3393 18.4406 24.5259 17.8845 24.5242H7.37111L8.39795 21.6616C8.4849 21.4041 8.64647 21.1782 8.86212 21.0128C9.06223 20.8534 9.31052 20.7665 9.56638 20.7665H17.5693L18.0039 19.5452H9.16008L11.3578 13.4014C11.4583 13.12 11.5975 12.8539 11.7715 12.6109C11.9359 12.3764 12.1357 12.1687 12.3637 11.9953C12.5821 11.8279 12.8262 11.6969 13.0864 11.6075C13.3425 11.5183 13.6118 11.4729 13.883 11.4733H29.8384L26.4846 20.7628H31.4562C31.5873 20.7637 31.7149 20.7203 31.8182 20.6397C31.9328 20.5493 32.0184 20.4273 32.0645 20.2888L34.9184 12.3696C35.0072 12.112 35.1699 11.8863 35.3863 11.7208C35.5861 11.5617 35.8339 11.4749 36.0893 11.4745H38.7192L34.7313 22.5715Z'
            fill='#9FE870'
          />
          <path
            d='M68.0939 11.5081L67.2839 14.6286H61.5475C60.6711 14.6286 60.1266 14.9827 59.9142 15.6909L59.8345 15.9565C59.8168 16.045 59.8079 16.1557 59.8079 16.2885C59.8079 16.439 59.8611 16.5673 59.9673 16.6735C60.0647 16.7709 60.1797 16.8417 60.3125 16.886C60.4188 16.9214 60.6135 16.9745 60.8968 17.0454L62.7691 17.5367C65.0885 18.1298 66.2482 19.2364 66.2482 20.8564C66.2482 21.3078 66.2039 21.7062 66.1154 22.0515L65.9826 22.5959C65.6196 24.0566 64.9911 25.0657 64.097 25.6235C63.2029 26.1812 61.7378 26.46 59.7017 26.46H53.6333L54.4699 23.3262H60.5914C61.1845 23.3262 61.5961 23.251 61.8263 23.1005C62.0742 22.9323 62.2512 22.6756 62.3575 22.3303L62.4371 22.0515C62.4814 21.8921 62.5035 21.777 62.5035 21.7062C62.5035 21.4406 62.3796 21.2237 62.1317 21.0555C61.937 20.9228 61.543 20.7855 60.9499 20.6439L59.0378 20.1791C57.0459 19.6923 56.05 18.63 56.05 16.9922C56.05 16.5408 56.0943 16.1424 56.1828 15.7971L56.3023 15.3855C56.6918 13.9248 57.3691 12.9156 58.334 12.3579C59.3078 11.7914 60.6843 11.5081 62.4637 11.5081H68.0939ZM79.1562 13.9514L78.3595 16.9391H74.7477C73.9421 16.9391 73.3445 17.1162 72.955 17.4703C72.5478 17.8332 72.2468 18.3821 72.0521 19.1168L71.5342 21.0157C71.4457 21.2901 71.4014 21.6531 71.4014 22.1046C71.4014 23.0164 71.9635 23.4723 73.0878 23.4723H76.5934L75.81 26.46H72.2247C70.7817 26.46 69.6574 26.1458 68.8519 25.5172C68.0551 24.8887 67.6568 23.968 67.6568 22.7552C67.6568 22.1887 67.7453 21.5469 67.9223 20.8298L68.3871 19.0372C68.8474 17.249 69.622 15.9521 70.7109 15.1465C71.7821 14.3498 73.2206 13.9514 75.0265 13.9514H79.1562ZM90.9223 17.8421C90.9223 18.5591 90.8338 19.2098 90.6567 19.7941L90.1388 21.7062C89.6962 23.2997 88.9703 24.4903 87.9611 25.2782C86.9431 26.0661 85.5311 26.46 83.7252 26.46H82.4106C80.9765 26.46 79.8832 26.1059 79.1307 25.3977C78.3871 24.6895 78.0153 23.7379 78.0153 22.5428C78.0153 21.8434 78.1038 21.2016 78.2809 20.6173L78.7987 18.7052C79.2414 17.1117 79.9673 15.9211 80.9765 15.1332C81.9945 14.3453 83.4065 13.9514 85.2124 13.9514H86.527C87.9788 13.9514 89.0721 14.3011 89.8069 15.0004C90.5505 15.6998 90.9223 16.647 90.9223 17.8421ZM87.3105 18.1077C87.3105 17.2932 86.8501 16.886 85.9295 16.886H84.6149C84.0306 16.886 83.5747 17.0321 83.2471 17.3242C82.9196 17.6163 82.6629 18.0767 82.477 18.7052L81.7334 21.4274C81.6625 21.7106 81.6271 21.9939 81.6271 22.2772C81.6271 23.1093 82.0875 23.5254 83.0081 23.5254H84.3227C84.907 23.5254 85.3629 23.3793 85.6904 23.0872C86.0357 22.7862 86.2968 22.3259 86.4739 21.7062L87.2042 18.9841C87.2751 18.7008 87.3105 18.4086 87.3105 18.1077ZM101.042 13.9514L100.165 17.218H98.6251C97.97 17.218 97.4831 17.364 97.1644 17.6562C96.8369 17.9572 96.5801 18.4441 96.3942 19.1168L94.429 26.46H90.764L92.8621 18.5724C93.2604 17.0321 93.8978 15.8768 94.7742 15.1066C95.6506 14.3365 96.8324 13.9514 98.3196 13.9514H101.042ZM111.427 17.9218C111.427 18.6122 111.347 19.2364 111.188 19.7941L110.723 21.4805H103.38C103.362 21.6221 103.353 21.8124 103.353 22.0515C103.353 22.9987 103.924 23.4723 105.066 23.4723H109.501L108.718 26.46H104.283C102.831 26.46 101.698 26.1192 100.884 25.4376C100.069 24.7559 99.6619 23.791 99.6619 22.5428C99.6619 21.7903 99.7504 21.1219 99.9274 20.5377L100.419 18.7849C100.879 17.1383 101.609 15.9167 102.61 15.1199C103.584 14.3409 104.938 13.9514 106.673 13.9514H107.297C108.625 13.9514 109.648 14.3143 110.365 15.0403C111.073 15.7573 111.427 16.7178 111.427 17.9218ZM107.868 17.9483C107.868 17.0985 107.47 16.6735 106.673 16.6735H106.235C105.199 16.6735 104.482 17.3906 104.084 18.8247L103.977 19.1965H107.682L107.735 18.9841C107.824 18.5945 107.868 18.2493 107.868 17.9483ZM128.611 11.5081L126.42 19.9269C125.835 22.1577 124.893 23.8043 123.591 24.8666C122.29 25.9289 120.595 26.46 118.506 26.46H117.961C116.315 26.46 115.057 26.044 114.19 25.2118C113.314 24.3797 112.875 23.2111 112.875 21.7062C112.875 20.9183 112.999 20.0552 113.247 19.1168L115.292 11.5081H118.957L116.872 19.3957C116.651 20.2632 116.54 20.9228 116.54 21.3742C116.54 22.6756 117.178 23.3262 118.452 23.3262H119.077C120.9 23.3262 122.157 22.016 122.848 19.3957L124.946 11.5081H128.611ZM140.045 17.2976C140.045 17.8996 139.965 18.506 139.806 19.1168L139.075 21.839C138.677 23.3705 138.035 24.5257 137.15 25.3048C136.274 26.0749 135.092 26.46 133.605 26.46H130.471L129.223 31.081H125.558L130.152 13.9514H136.406C137.61 13.9514 138.518 14.2435 139.129 14.8278C139.739 15.4121 140.045 16.2353 140.045 17.2976ZM136.274 18.1608C136.274 17.3463 135.818 16.9391 134.906 16.9391H133.034L131.268 23.4723H133.14C134.353 23.4723 135.132 22.8349 135.477 21.5601L136.128 19.1168C136.225 18.745 136.274 18.4263 136.274 18.1608ZM155.104 9.05151L150.456 26.46H144.202C143.007 26.46 142.1 26.159 141.48 25.5571C140.86 24.9551 140.55 24.1318 140.55 23.0872C140.55 22.5383 140.635 21.9408 140.803 21.2946L141.533 18.5724C141.931 17.0321 142.569 15.8768 143.445 15.1066C144.322 14.3365 145.508 13.9514 147.004 13.9514H150.125L151.439 9.05151H155.104ZM149.341 16.9391H147.469C146.265 16.9391 145.49 17.5765 145.145 18.8513L144.494 21.2946C144.406 21.6398 144.362 21.9585 144.362 22.2506C144.362 23.0651 144.804 23.4723 145.689 23.4723H147.575L149.341 16.9391ZM165.396 16.9657C165.396 17.6031 165.29 18.3201 165.078 19.1168L163.086 26.46H156.539C154.14 26.46 152.941 25.5526 152.941 23.7379C152.941 23.2864 153.007 22.8349 153.14 22.3834C153.485 21.1264 154.1 20.2677 154.986 19.8073C155.871 19.347 157.141 19.1168 158.797 19.1168H161.373L161.492 18.7583C161.563 18.5282 161.598 18.3024 161.598 18.0811C161.598 17.4083 161.045 17.0719 159.939 17.0719H155.663L156.513 13.9514H161.107C162.621 13.9514 163.714 14.1948 164.387 14.6817C165.06 15.1686 165.396 15.9299 165.396 16.9657ZM160.749 21.4805H158.571C158.049 21.4805 157.646 21.5513 157.363 21.6929C157.097 21.8257 156.911 22.1001 156.805 22.5162C156.752 22.6756 156.725 22.8305 156.725 22.981C156.725 23.4856 157.079 23.7379 157.787 23.7379H160.151L160.749 21.4805ZM176.087 13.9514L175.303 16.9391H172.037L170.709 21.8921C170.638 22.202 170.603 22.41 170.603 22.5162C170.603 23.0562 171.001 23.3262 171.798 23.3262H173.59L172.754 26.46H170.377C167.969 26.46 166.765 25.5084 166.765 23.6051C166.765 23.0562 166.836 22.5383 166.977 22.0515L168.372 16.9391H166.194L166.977 13.9514H169.155L170.244 9.8748H173.922L172.833 13.9514H176.087ZM186.485 17.9218C186.485 18.6122 186.405 19.2364 186.246 19.7941L185.781 21.4805H178.438C178.42 21.6221 178.412 21.8124 178.412 22.0515C178.412 22.9987 178.983 23.4723 180.125 23.4723H184.56L183.776 26.46H179.341C177.889 26.46 176.756 26.1192 175.942 25.4376C175.127 24.7559 174.72 23.791 174.72 22.5428C174.72 21.7903 174.809 21.1219 174.986 20.5377L175.477 18.7849C175.937 17.1383 176.668 15.9167 177.668 15.1199C178.642 14.3409 179.996 13.9514 181.731 13.9514H182.355C183.683 13.9514 184.706 14.3143 185.423 15.0403C186.131 15.7573 186.485 16.7178 186.485 17.9218ZM182.926 17.9483C182.926 17.0985 182.528 16.6735 181.731 16.6735H181.293C180.257 16.6735 179.54 17.3906 179.142 18.8247L179.036 19.1965H182.74L182.794 18.9841C182.882 18.5945 182.926 18.2493 182.926 17.9483ZM198.942 13.9514L198.158 16.9391H193.537C192.466 16.9391 191.93 17.249 191.93 17.8686C191.93 18.1962 192.254 18.4131 192.9 18.5193L194.4 18.7583C196.525 19.1036 197.587 20.0552 197.587 21.6133C197.587 22.0559 197.521 22.5029 197.388 22.9544C197.176 23.7511 196.906 24.393 196.578 24.8798C196.242 25.3756 195.812 25.7297 195.29 25.9421C194.741 26.1635 194.214 26.3051 193.71 26.3671C193.223 26.429 192.51 26.46 191.572 26.46H186.486L187.283 23.4723H192.355C192.647 23.4723 192.882 23.459 193.059 23.4325C193.218 23.4059 193.382 23.3174 193.55 23.1669C193.701 23.0252 193.776 22.8261 193.776 22.5693C193.776 22.1798 193.36 21.9187 192.528 21.7859L191.386 21.5867C189.226 21.2237 188.146 20.2544 188.146 18.6786C188.146 18.3245 188.199 17.9262 188.305 17.4836C188.5 16.7222 188.788 16.0893 189.168 15.5847C189.54 15.0889 190.014 14.7304 190.589 14.5091C191.209 14.2701 191.776 14.1196 192.289 14.0576C192.882 13.9868 193.586 13.9514 194.4 13.9514H198.942Z'
            fill='white'
          />
        </svg>
      </div>
      <h3 className='footer-text text-xs md:text-sm md:mx-20 mx-4 mb-4'>
        SoccerProject provides a comprehensive soccer results service that
        covers top-tier and lower division leagues in many popular soccer
        countries. The service includes live scores and results for soccer
        games, cups, and tournaments, as well as information about goal scorers,
        halftime results, red cards, and goal alerts. Soccer24 also offers live
        score information for European soccer (e.g., UEFA Champions League),
        South American soccer, North American football, Asian soccer, African
        soccer, Australian football leagues, and junior & youth soccer. All of
        this information can be found on SoccerProject.
      </h3>
    </footer>
  );
};

export default Footer;