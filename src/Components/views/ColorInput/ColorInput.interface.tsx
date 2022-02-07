export interface IColorInput {
  color: any;
  handleChangeColor: (event: {
    target: { value: React.SetStateAction<string> };
  }) => void;
}
