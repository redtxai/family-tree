import { Member } from '../../models/Member.model';
import ChildrenWrapper from '../ChildrenWrapper/ChildrenWrapper';
import MemberBox from '../Member/MemberBox';
import './PartnerWrapper.scss';

interface PartnerWrapperProps {
  partners: Member[]
  childrenList: { [key: number]: Member[] } | null
}

function PartnerWrapper({ partners, childrenList }: PartnerWrapperProps) {
  return (
    <section className="partner-wrapper">
      {partners.map(partner => <section className="partner-box">
          <MemberBox key={partner.id} member={partner}></MemberBox>
          {childrenList 
            && childrenList[partner.id]
            && childrenList[partner.id].length > 0
            && <ChildrenWrapper childrenList={childrenList[partner.id]}></ChildrenWrapper>}
        </section>)}
    </section>
  )
}

export default PartnerWrapper;
