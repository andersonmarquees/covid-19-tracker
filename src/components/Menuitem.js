const Menuitem = () => {
  return (
    <div className="app__dropdown">
      <select name="country" id="country">
        <optgroup label="North American">
          <option value="volvo">USA</option>
          <option value="saab">CANADA</option>
        </optgroup>
        <optgroup label="South American">
          <option value="mercedes">BRAZIL</option>
          <option value="audi">CHILE</option>
        </optgroup>
      </select>
    </div>
  );
};

export default Menuitem;
