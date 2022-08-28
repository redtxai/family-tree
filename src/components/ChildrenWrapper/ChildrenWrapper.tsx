import { Member } from '../../models/Member.model';
import MemberRelationBox from '../MemberRelationBox/MemberRelationBox';
import './ChildrenWrapper.scss';

interface ChildrenWrapperProps {
  childrenList: Member[]
}

function ChildrenWrapper({ childrenList }: ChildrenWrapperProps) {
  return (
    <section className="children-wrapper">
      {childrenList.map(child =>
            <MemberRelationBox key={child.id} member={child}></MemberRelationBox>)}
    </section>
  )
}

export default ChildrenWrapper;
