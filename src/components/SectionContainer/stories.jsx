import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          cumque ut placeat labore. Saepe ipsum corporis eaque autem assumenda
          reprehenderit provident aliquid aut, esse repudiandae iure, vero illo
          numquam blanditiis.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
