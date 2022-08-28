import { Member } from "./Member.model"

export type MemberState = {
  memberList: Member[]
  setMemberList: (memberList: Member[]) => void
  getMemberById: (id: number) => Member | undefined

  partnerList: Member[]
  setPartnerList: (memberList: Member[]) => void
  getPartnerById: (id: number) => Member | undefined
}