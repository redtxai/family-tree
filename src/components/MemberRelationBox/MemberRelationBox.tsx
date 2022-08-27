import { Member } from "../../models/Member.model";
import MemberBox from "../Member/MemberBox";

interface MemberRelationBoxProps {
  member: Member
}

function MemberRelationBox({ member }: MemberRelationBoxProps ) {
  return (
    <section className="member-relation-box">
      <MemberBox member={member}></MemberBox>
      <section className="partner-wrapper">
        <section className="partner-box">
          <MemberBox member={member}></MemberBox>
          <section className="children-wrapper">
            <MemberRelationBox member={member}></MemberRelationBox>
          </section>
        </section>
      </section>
    </section>
  )
}