import React, { useEffect, useState } from "react";
import '../styles/Faq.css'
import Collapsible from 'react-collapsible';






function Faqsec() {


    




  return (
    <section class="accordions">
      <nav class="navigation">
        <h2 class="faq">FAQ</h2>
        <article>
          <ul class="accordion">
          <li class="accordion__item">
            <Collapsible class="accordion__link" trigger="Lorem ipsum dolor sit amet,">
              
                <p class="sub-accordion__item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                  consequat velit. Curabitur est nibh, varius in tellus nec,
                  mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                  velit eleifend vel. Ut aliquet mauris tortor, sed egestas
                  libero interdum vitae. Fusce sed commodo purus, at tempus
                  turpis.
                </p>
              </Collapsible>

          </li>
            
            <li class="accordion__item">
            <Collapsible class="accordion__link" trigger="Lorem ipsum dolor sit amet,">
              
              <p class="sub-accordion__item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                consequat velit. Curabitur est nibh, varius in tellus nec,
                mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                velit eleifend vel. Ut aliquet mauris tortor, sed egestas
                libero interdum vitae. Fusce sed commodo purus, at tempus
                turpis.
              </p>
            </Collapsible>
            </li>
            <li class="accordion__item">
            <Collapsible class="accordion__link" trigger="Lorem ipsum dolor sit amet,">
              
              <p class="sub-accordion__item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                consequat velit. Curabitur est nibh, varius in tellus nec,
                mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                velit eleifend vel. Ut aliquet mauris tortor, sed egestas
                libero interdum vitae. Fusce sed commodo purus, at tempus
                turpis.
              </p>
            </Collapsible>
            </li>
            <li class="accordion__item">
            <Collapsible class="accordion__link" trigger="Lorem ipsum dolor sit amet,">
              
              <p class="sub-accordion__item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                consequat velit. Curabitur est nibh, varius in tellus nec,
                mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                velit eleifend vel. Ut aliquet mauris tortor, sed egestas
                libero interdum vitae. Fusce sed commodo purus, at tempus
                turpis.
              </p>
            </Collapsible>
            </li>
            <li class="accordion__item">
            <Collapsible class="accordion__link" trigger="Lorem ipsum dolor sit amet,">
              
              <p class="sub-accordion__item">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                sed tempor sem. Aenean vel turpis feugiat, ultricies metus at,
                consequat velit. Curabitur est nibh, varius in tellus nec,
                mattis pulvinar metus. In maximus cursus lorem, nec laoreet
                velit eleifend vel. Ut aliquet mauris tortor, sed egestas
                libero interdum vitae. Fusce sed commodo purus, at tempus
                turpis.
              </p>
            </Collapsible>
            </li>
          </ul>
        </article>
      </nav>
    </section>
  )
}

export default Faqsec