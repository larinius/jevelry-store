const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4 className="contact-title">Contact Us</h4>
        <p>
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum. Mirum est notare quam littera gothica, quam
          nunc putamus parum claram anteposuerit litterarum formas human.
        </p>
        <ul>
          <li>
            <i className="fa fa-fax"></i> Address : No 40 Baria Sreet 133/2
            NewYork City
          </li>
          <li>
            <i className="fa fa-phone"></i> E-mail: info@yourdomain.com
          </li>
          <li>
            <i className="fa fa-envelope-o"></i> +88013245657
          </li>
        </ul>
        <div className="working-time">
          <h6>Working Hours</h6>
          <p>
            <span>Monday – Saturday:</span>08AM – 22PM
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
