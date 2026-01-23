package com.od.portfolio.ContactSubdomain.BusinessLayer;

import com.od.portfolio.ContactSubdomain.DataAccessLayer.Message;
import com.od.portfolio.ContactSubdomain.DataAccessLayer.MessageRepository;
import com.od.portfolio.ContactSubdomain.MapperLayer.MessageMapper;
import com.od.portfolio.ContactSubdomain.PresentationLayer.MessageRequestDTO;
import com.od.portfolio.ContactSubdomain.PresentationLayer.MessageResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService {

    private final MessageRepository repository;
    private final MessageMapper mapper;

    @Override
    public void saveMessage(MessageRequestDTO dto) {
        Message message = mapper.requestDTOToEntity(dto);
        message.setSentAt(LocalDateTime.now());
        repository.save(message);
    }

    @Override
    public List<MessageResponseDTO> getAllMessages() {
        return repository.findAll()
                .stream()
                .sorted((m1, m2) -> m2.getSentAt().compareTo(m1.getSentAt())) // Newest messages first
                .map(mapper::entityToResponseDTO)
                .toList();
    }

    @Override
    public void deleteMessage(Integer id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Message not found");
        }
        repository.deleteById(id);
    }
}