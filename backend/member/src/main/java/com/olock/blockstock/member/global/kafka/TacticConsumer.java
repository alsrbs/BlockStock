package com.olock.blockstock.member.global.kafka;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.olock.blockstock.member.domain.award.appication.TacticService;
import com.olock.blockstock.member.domain.award.dto.TacticTopicMessage;
import com.olock.blockstock.member.domain.member.application.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TacticConsumer {
    private final TacticService tacticService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @KafkaListener(topics = "tactic-topic", groupId = "member-consumer")
    public void consumeMemberTopic(String message){
        try {
            TacticTopicMessage tacticTopicMessage = objectMapper.readValue(message, TacticTopicMessage.class);
            tacticService.updateContestResult(tacticTopicMessage);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }



}
