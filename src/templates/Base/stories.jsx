import { Base } from '.';
import mock from './mock';
import { GridText } from './../../components/GridText/index';
import mockGrid from './../../components/GridText/mock';
export const mockBase = {
  children: (
    <>
      <GridText {...mockGrid} />
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
      <GridText {...mockGrid} background />
      <GridText {...mockGrid} />
    </>
  ),
  ...mock,
};
export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
