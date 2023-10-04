package com.olock.blockstock.member.domain.award.appication;

import com.olock.blockstock.member.domain.award.dto.TacticTopicMessage;
import com.olock.blockstock.member.domain.award.persistence.AwardRepository;
import com.olock.blockstock.member.domain.member.application.MemberService;
import com.olock.blockstock.member.domain.member.persistence.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TacticServiceImpl implements TacticService {

    private final AwardRepository awardRepository;
    private final MemberRepository memberRepository;
    private final Long firstReward = 50000000L;
    private final Long secondReward = 30000000L;
    @Override
    public void updateContestResult(Long contestId, String contestTitle, List<Long> memberIds, List<Long> results) {
        updateMemberMoney(memberIds, results);
        giveReward(memberIds.get(0), contestId, contestTitle + " 우승", firstReward);
        giveReward(memberIds.get(1), contestId, contestTitle + " 준우승", secondReward);
    }

    @Async
    private void giveReward(Long memberId, Long contestId, String awardName, Long reward) {
        awardRepository.addAward(memberId, contestId, awardName);
        memberRepository.updateMoney(memberId, reward);
    }

    @Async
    private void updateMemberMoney(List<Long> memberIds, List<Long> results) {
        for (int i = 0; i < memberIds.size(); i++) {
            memberRepository.updateMoney(memberIds.get(i), results.get(i));
        }
    }
}
