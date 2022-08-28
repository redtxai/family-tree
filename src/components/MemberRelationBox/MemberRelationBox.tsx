import React, { useContext, useEffect, useState } from "react";
import { MemberContext } from "../../context-api/MemberProvider";
import { Member } from "../../models/Member.model";
import MemberBox from "../Member/MemberBox";
import PartnerWrapper from "../PartnerWrapper/PartnerWrapper";

interface MemberRelationBoxProps {
  member: Member
}

function MemberRelationBox({ member }: MemberRelationBoxProps ) {
  const { getMemberById } = useContext(MemberContext)

  const [partners, setPartners] = useState<Member[]>([])
  const [children, setChildren] = useState<{ [key: number]: Member[] } | null>(null)

  const getChildren = (children: { [key: number]: number[] }) => {
    const keys = Object.keys(children)
    if (keys.length === 0) {
      return {}
    }
    return keys.reduce((acc, curr) => ({ ...acc, [curr]: children[+curr].map(childId => getMemberById(childId)) }), {})
  }

  useEffect(() => {
    const partnersIds = member.partners
    if (partnersIds && partnersIds.length > 0) {
      const memberPartners = partnersIds.reduce((acc: Member[], partnerId) => {
        const member = getMemberById(partnerId)
        if(member) {
          acc.push(member)
        }
        return acc
      }, [])

      const memberChildren = member.children ? getChildren(member.children) : {}

      setPartners(memberPartners)
      setChildren(memberChildren)
    }
  }, [member])

  return (
    <section className="member-relation-box">
      <MemberBox member={member}></MemberBox>
      {partners.length > 0 && <PartnerWrapper partners={partners} childrenList={children}></PartnerWrapper>}
    </section>
  )
}

export default MemberRelationBox;