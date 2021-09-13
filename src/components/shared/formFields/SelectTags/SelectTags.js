import React from 'react';
import { getTags } from "../../../../api/ads"
import CheckboxGroup from '../../../shared/formFields/CheckBoxGroup';

function SelectTags({ mainLabel, ...props }) {
  const [tags, setTags] = React.useState([]);


  React.useEffect(() => {
    // getTags().then(setTags).then(console.log());
    const applyTags = async () => {
      //const tagss = await getTags()
      setTags(await getTags())
      // console.log("TAGS BAJADOS", tagss)
    }
    applyTags()
  }, []);

  return (
    <div className="field">
      <label className="label mb-auto">{mainLabel}</label>
      <CheckboxGroup options={tags} {...props} />
    </div>
  )
}

export default SelectTags;
