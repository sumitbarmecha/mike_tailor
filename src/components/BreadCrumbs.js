import React from 'react'

const BreadCrumbs = (props) => {

  // display_breadcrumbs
  const style = {
    display: `${props.display}`,
  };

  return (
    <div style={style} className=''><nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#" className="text-light ">{props.path}</a>
      </li>
      
    </ol>
  </nav></div>
  )
}

export default BreadCrumbs