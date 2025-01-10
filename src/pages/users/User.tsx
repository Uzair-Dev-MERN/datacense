import CustomTable from "../../components/table/Table";
import SearchField from "../../components/Fields/SearchField";

// User Component with Search Functionality
const User = () => {
  return (
    <div>
      <div className="w-52 place-self-end pb-5">
        <SearchField />
      </div>
      <CustomTable />
    </div>
  );
};

export default User;
