import React from "react";

type Props = {
  show: boolean;
  fill?: string;
  stroke?: string;
};

export default function PasswordViewEyeIcon({
  show,
  fill,
  stroke,
  ...props
}: Props) {
  if (show)
    return (
      <svg
        width="23"
        viewBox="0 0 23 19"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill ?? "#6C6C6C"}
        {...props}
      >
        <g clipPath="url(#clip0_1654_136132)">
          <path
            d="M11.3399 13.3662C11.1774 13.3662 11.0216 13.3016 10.9066 13.1867C10.7917 13.0718 10.7272 12.9159 10.7272 12.7534C10.7272 12.5909 10.7917 12.4351 10.9066 12.3202C11.0216 12.2052 11.1774 12.1407 11.3399 12.1407C12.0092 12.1386 12.6594 11.918 13.1918 11.5124C13.7242 11.1069 14.1095 10.5386 14.2893 9.89392C14.305 9.8105 14.3378 9.73124 14.3857 9.66117C14.4336 9.59109 14.4955 9.53173 14.5675 9.48685C14.6396 9.44196 14.7201 9.41254 14.8042 9.40043C14.8882 9.38832 14.9738 9.3938 15.0555 9.41652C15.1373 9.43924 15.2135 9.4787 15.2792 9.5324C15.345 9.5861 15.3988 9.65287 15.4374 9.72848C15.476 9.80408 15.4984 9.88688 15.5033 9.97162C15.5082 10.0564 15.4954 10.1412 15.4658 10.2207C15.2148 11.123 14.6758 11.9185 13.9311 12.4863C13.1863 13.0541 12.2764 13.3631 11.3399 13.3662V13.3662Z"
            stroke="none"
          />
          <path
            d="M7.92487 11.0214C7.79985 11.022 7.67772 10.9838 7.5753 10.9121C7.47288 10.8404 7.39521 10.7388 7.35297 10.6211C7.15746 10.1298 7.05763 9.60571 7.05885 9.07696C7.05995 8.16107 7.35476 7.26968 7.89995 6.53373C8.44515 5.79779 9.212 5.25609 10.0878 4.98822C10.9637 4.72035 11.9023 4.74042 12.7659 5.0455C13.6295 5.35057 14.3725 5.92456 14.8857 6.68314C14.9685 6.81429 14.9977 6.97222 14.9672 7.12428C14.9368 7.27634 14.8492 7.4109 14.7223 7.50014C14.5912 7.58749 14.4314 7.62095 14.2762 7.59357C14.121 7.56618 13.9823 7.48005 13.889 7.35308C13.523 6.81087 12.9927 6.40041 12.3761 6.18208C11.7594 5.96376 11.089 5.9491 10.4634 6.14025C9.83778 6.33141 9.29003 6.7183 8.90072 7.244C8.51141 7.7697 8.30109 8.40646 8.30069 9.06062C8.30284 9.43747 8.37201 9.81094 8.50494 10.1636C8.53801 10.2395 8.55533 10.3214 8.55587 10.4042C8.55641 10.487 8.54015 10.5691 8.50807 10.6454C8.476 10.7218 8.42878 10.7909 8.36927 10.8485C8.30975 10.9061 8.23917 10.951 8.1618 10.9806C8.08699 11.0121 8.00593 11.0261 7.92487 11.0214V11.0214Z"
            stroke="none"
          />
          <path
            d="M11.3482 18.162C6.64226 18.162 2.45104 14.8613 0.0490509 9.322C0.0169189 9.24571 0.000366211 9.16377 0.000366211 9.08099C0.000366211 8.99821 0.0169189 8.91626 0.0490509 8.83997C2.45104 3.30886 6.64226 0 11.34 0C16.0296 0 20.2454 3.30886 22.6228 8.83997C22.655 8.91626 22.6715 8.99821 22.6715 9.08099C22.6715 9.16377 22.655 9.24571 22.6228 9.322C20.2454 14.8613 16.0296 18.162 11.34 18.162H11.3482ZM1.28273 9.08507C3.47229 13.9871 7.22234 16.9365 11.34 16.9365C15.4577 16.9365 19.2078 14.0034 21.4055 9.08507C19.2078 4.18305 15.4659 1.2255 11.34 1.2255C7.21417 1.2255 3.47229 4.15854 1.28273 9.08507Z"
            stroke="none"
          />
          <path
            d="M0.88238 15.6783C0.775151 15.6788 0.669673 15.6511 0.576483 15.5981C0.483294 15.545 0.405656 15.4685 0.351328 15.376C0.277979 15.2372 0.259956 15.0757 0.300886 14.9241C0.341816 14.7725 0.43866 14.6421 0.571918 14.559L21.2421 2.60628C21.3815 2.53163 21.5443 2.51375 21.6966 2.55639C21.8488 2.59902 21.9787 2.69886 22.0591 2.83504C22.1365 2.973 22.1568 3.13582 22.1156 3.28857C22.0743 3.44131 21.9749 3.5718 21.8385 3.65204L1.18467 15.5966C1.09364 15.6519 0.988837 15.6802 0.88238 15.6783V15.6783Z"
            stroke="none"
          />
        </g>
        <defs>
          <clipPath id="clip0_1654_136132">
            <rect width="22.68" height="18.162" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );

  return (
    <svg
      width="23"
      viewBox="0 0 23 19"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ?? "#6C6C6C"}
      {...props}
    >
      <circle
        cx="11.225"
        cy="9.225"
        r="3.6"
        stroke={stroke ?? "#6C6C6C"}
        fill="none"
        strokeWidth="1.25"
      />
      <path
        d="M11.3482 18.162C6.64226 18.162 2.45104 14.8613 0.0490509 9.322C0.0169189 9.24571 0.000366211 9.16377 0.000366211 9.08099C0.000366211 8.99821 0.0169189 8.91626 0.0490509 8.83997C2.45104 3.30886 6.64226 0 11.34 0C16.0296 0 20.2454 3.30886 22.6228 8.83997C22.655 8.91626 22.6715 8.99821 22.6715 9.08099C22.6715 9.16377 22.655 9.24571 22.6228 9.322C20.2454 14.8613 16.0296 18.162 11.34 18.162H11.3482ZM1.28273 9.08507C3.47229 13.9871 7.22234 16.9365 11.34 16.9365C15.4577 16.9365 19.2078 14.0034 21.4055 9.08507C19.2078 4.18305 15.4659 1.2255 11.34 1.2255C7.21417 1.2255 3.47229 4.15854 1.28273 9.08507Z"
        stroke="none"
      />
    </svg>
  );
}
