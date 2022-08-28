import React, { useContext } from 'react';
import MemberRelationBox from '../../components/MemberRelationBox/MemberRelationBox';
import { MemberContext } from '../../context-api/MemberProvider';

function MainPage() {
  const { memberList } = useContext(MemberContext)
  return (
    <section className="main-page-wrapper">
      {memberList.length > 0 
        ? memberList.map(member => <MemberRelationBox key={member.id} member={member}></MemberRelationBox>)
        : 'TODO: ADD FIRST MEMBER FEATURE'}
    </section>
  )
}

export default MainPage;
