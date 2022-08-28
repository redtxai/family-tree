import React, { createContext, useState, FC } from "react";
import { Member } from "../models/Member.model";
import { MemberState } from "../models/MemberContext.model";

const contextDefaultValues: MemberState = {
  memberList: [{
    id: 1,
    name: 'Txai Mostardeiro Potier',
  }],
  setMemberList: () => {},
  getMemberById: () => undefined,

  partnerList: [{
    id: 1,
    name: 'Txai Mostardeiro Potier',
  }],
  setPartnerList: () => {},
  getPartnerById: () => undefined
};

export const MemberContext = createContext<MemberState>(
  contextDefaultValues
);

interface Props {
  children?: React.ReactNode;
}

export const MemberProvider: FC<Props> = ({ children }) => {
  const [memberList, setMemberList] = useState<Member[]>(contextDefaultValues.memberList);
  const [partnerList, setPartnerList] = useState<Member[]>(contextDefaultValues.partnerList);

  const getMemberById = (id: number) => memberList.find(member => member.id === id)

  const getPartnerById = (id: number) => partnerList.find(partner => partner.id === id)

  return (
    <MemberContext.Provider
      value={{
        memberList,
        setMemberList,
        getMemberById,
        partnerList,
        setPartnerList,
        getPartnerById
      }}
    >
      {children}
    </MemberContext.Provider>
  );
};
