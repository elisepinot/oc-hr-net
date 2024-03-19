import Select from 'react-select';

const CustomSelect = ({ label, options, onChange, placeholder, value }) => {
  return (
    <div>
      {label && <label htmlFor={`select-${label}`}>{label}</label>}
      <Select
        inputId={`select-${label}`}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
        value={options.find((option) => option.value === value)} // Trouve l'option qui correspond à la valeur actuelle
      />
    </div>
  );
};

export default CustomSelect;
