export interface ButtonConfig {
  buttonType: 'primary' | 'secondary' | 'error'; // primary or secondary or error
  buttonSize?: string; // small
  iconURL?: string; // provide iconURL
  iconPosition?: 'left' | 'right'; // left or right
  imageUrl: string;
  text: string;
  linkURL: string;
}

export interface AddButtonConfig {
  buttonSize: string; // small
  iconURL: string; // provide iconURL
  text: string;
  linkURL: string;
}

export interface IconButtonConfig {
  buttonSize: 'small' | 'medium' | 'large'; // small or medium or large
  iconURL: string; // provide iconURL
  imageUrl: string;
  text: string;
  linkURL: string;
  outline: boolean; // can be yes or no based on style. Default 'No'
  shape?: string; // can be round or square based on design. Default square
}

export interface LinkConfig {
  hrefVal: string;
  linkText: string;
  iconURL?: string; // provide iconURL
  iconPosition?: string; // left or right
}
