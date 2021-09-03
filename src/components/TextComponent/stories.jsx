import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur
     adipisicing elit. Quasi sed nesciunt harum incidunt
     architecto voluptate, eaque libero molestias,
     minima tempore veritatis. Optio, nulla. Provident enim tenetur maxime es
     t ex. Consequatur!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
