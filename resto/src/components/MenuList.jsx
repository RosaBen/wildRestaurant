
import MenuItem from './MenuItem';

export default function MenuList({listFood}) {
    console.log({listFood})
return (
    <>
    {listFood.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </>
  );
}
