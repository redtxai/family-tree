import React from 'react';

import { Member } from '../../models/Member.model';
import './MemberBox.scss';

interface MemberBoxProps {
  member: Member
}

function MemberBox({ member }: MemberBoxProps) {
  return (
    <section>
      <div className='member-form-content'>
        {member.name}
      </div>
      <div className='member-add-button'>
        +
      </div>
    </section>
  )
}

export default MemberBox;
