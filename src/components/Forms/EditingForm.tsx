import { useState } from 'react';

interface IEditingFormProps {
  defaultValue: string;
  onSubmit: (newCaption: string) => void;
}

export default function EditingForm(props: IEditingFormProps) {
  const { defaultValue, onSubmit } = props;
  const [caption, setCaption] = useState(defaultValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(caption);
      }}
    >
      <label>
        Название:&nbsp;
        <input type="string" value={caption} onChange={handleChange} />
      </label>
      <button type="submit">Изменить</button>
    </form>
  );
}
