import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductsPage() {
  return (
    <div>
      <h1>ProductsPage</h1>
      <Hero/>
      <RightSection/>
      <LeftSection/>
      <Universe/>
    </div>
  )
}

export default ProductsPage